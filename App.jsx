import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  useEffect(() => {
    axios
      .get('/user_inform/login')
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  }, []);

  const onSubmit = async () => {
    try {
      if (inputId === 'u1@market.com' && inputPw === '11111111') {
        const response = await axios.post(
          'https://market-lion.koyeb.app/api/users/login',
          {
            email: inputId,
            password: inputPw,
          }
        );
        console.log(response.data);
      } else {
        console.log('ID 또는 비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>로그인</h1>
      <div>
        <div>
          <label htmlFor="input_id">ID: </label>
          <input
            type="text"
            name="input_id"
            value={inputId}
            onChange={handleInputId}
          />
        </div>
        <div>
          <label htmlFor="input_pw">PW: </label>
          <input
            type="password"
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw}
          />
        </div>
        <div>
          <button type="button" onClick={onSubmit}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default App;