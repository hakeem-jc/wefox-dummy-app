import { rest } from 'msw';
import { API_URL } from '../common/constants';
import { list_response } from './mock_list';

export const handlers = [
    rest.get(`${API_URL}`, (req, res, ctx) => {
        return res(ctx.status(200),ctx.json(list_response))
    }),
]