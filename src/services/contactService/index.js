import { HttpClient } from '../HTTPClient';

// eslint-disable-next-line import/prefer-default-export
export const contactService = {
  async sendMessage({ name, email }, HttpClientModule = HttpClient) {
    return HttpClientModule.post('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      body: {
        name,
        email,
      },
    }).then((res) => {
      /* Manda um erro aleatoriamente */
      if (JSON.stringify(res) !== JSON.stringify({ name, email })) {
        throw new Error();
      }
      return res;
    });
  },
};
