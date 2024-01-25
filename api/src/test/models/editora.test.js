import { jest } from '@jest/globals';
import Editora from '../../models/editora.js';

describe('Tests for Editora model', () => {
  const objEditora = {
    nome: 'CDC',
    cidade: 'Rio de Janeiro',
    email: 'c@c.com',
  };

  it('Should instance a new Editora', () => {
    const editora = new Editora(objEditora);

    expect(editora).toEqual(expect.objectContaining(objEditora));
  });

  it.skip('Should save Editora in DB', () => {
    const editora = new Editora(objEditora);

    editora.salvar().then((data) => {
      expect(data.nome).toBe('CDC');
    });
  });

  it.skip('Should save Editora in DB', async () => {
    const editora = new Editora(objEditora);

    const data = await editora.salvar();

    const returned = await Editora.pegarPeloId(data.id);

    expect(returned).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });

  it('Should do a simmulated call to DB', () => {
    const editora = new Editora(objEditora);

    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: 'CDC',
      cidade: 'Rio de Janeiro',
      email: 'c@c.com',
      created_at: '2024-25-01',
      updated_at: '2024-25-01',
    });

    const returned = editora.salvar();

    expect(returned).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });
});
