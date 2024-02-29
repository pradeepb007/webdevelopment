import { getUsers } from './api'; // Assuming api.js is in the same directory

describe('getUsers function', () => {
  it('fetches users from the API', async () => {
    // Mock performApiRequest function
    const mockApiResponse = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];
    jest.mock('../utils/apiUtils', () => ({
      performApiRequest: jest.fn(() => Promise.resolve(mockApiResponse)),
    }));

    // Call getUsers function
    const users = await getUsers();

    // Check if performApiRequest was called with the correct argument
    expect(performApiRequest).toHaveBeenCalledWith('/users');

    // Check if getUsers returns the expected data
    expect(users).toEqual(mockApiResponse);
  });

  it('throws error if API request fails', async () => {
    // Mock performApiRequest function to throw an error
    jest.mock('../utils/apiUtils', () => ({
      performApiRequest: jest.fn(() => Promise.reject(new Error('Failed to fetch users'))),
    }));

    // Call getUsers function and expect it to throw an error
    await expect(getUsers()).rejects.toThrow('Failed to fetch users');
  });
});
