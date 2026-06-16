import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado único para armazenar todos os campos do formulário
  const [formData, setFormData] = useState({
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    estado: '',
    cidade: ''
  });

  // Estados auxiliares para feedback visual do usuário
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Função disparada sempre que o usuário digita em qualquer input
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Se o usuário estiver digitando no CEP, aplicamos uma limpeza de caracteres
    if (name === 'cep') {
      const apenasNumeros = value.replace(/\D/g, ''); // Remove tudo que não for número
      
      setFormData((prevState) => ({
        ...prevState,
        [name]: apenasNumeros
      }));

      // Quando atingir exatamente 8 dígitos, fazemos a requisição automaticamente
      if (apenasNumeros.length === 8) {
        buscarEnderecoPorCep(apenasNumeros);
      }
    } else {
      // Para os demais campos, apenas atualiza o estado normalmente
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  // Função Assíncrona que realiza a requisição HTTP HTTP para a API ViaCEP
  const buscarEnderecoPorCep = async (cepInformado) => {
    setLoading(true);
    setError('');

    try {
      const url = `https://viacep.com.br/ws/${cepInformado}/json/`;
      const response = await fetch(url);
      const data = await response.json();

      // A API do ViaCEP retorna { erro: "true" } se o CEP não existir
      if (data.erro) {
        setError('CEP não encontrado.');
        limparCamposEndereco();
      } else {
        // Mapeia os dados retornados da API para os nossos campos do formulário
        setFormData((prevState) => ({
          ...prevState,
          rua: data.logradouro || '',
          bairro: data.bairro || '',
          estado: data.uf || '',
          cidade: data.localidade || ''
        }));
      }
    } catch (err) {
      setError('Erro de conexão ao buscar o CEP.');
      limparCamposEndereco();
    } finally {
      setLoading(false);
    }
  };

  // Limpa os campos auto-preenchidos caso o CEP dê erro ou seja apagado
  const limparCamposEndereco = () => {
    setFormData((prevState) => ({
      ...prevState,
      rua: '',
      bairro: '',
      estado: '',
      cidade: ''
    }));
  };

  return (
    <div className="app-container">
      <div className="address-card">
        <h1>Address</h1>

        {/* Mensagens de feedback */}
        {loading && <div className="status-message loading">Buscando endereço...</div>}
        {error && <div className="status-message error">{error}</div>}

        <form onSubmit={(e) => e.preventDefault()} className="address-form">
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            maxLength="8"
            value={formData.cep}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="rua"
            placeholder="Rua"
            value={formData.rua}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="numero"
            placeholder="Número"
            value={formData.numero}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="bairro"
            placeholder="Bairro"
            value={formData.bairro}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            value={formData.estado}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={formData.cidade}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}

export default App;