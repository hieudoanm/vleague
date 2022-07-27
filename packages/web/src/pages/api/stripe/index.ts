const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import get from 'lodash/get';
import { NextApiRequest, NextApiResponse } from 'next';

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.BASE_URL;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const amount = get(req, 'body.amount', 0);
  const productName = get(req, 'body.productName', 'API Key');

  const items = [
    {
      price_data: {
        currency: 'usd',
        product_data: { name: productName },
        unit_amount: amount * 100,
      },
      quantity: 1,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: 'payment',
    success_url: `${URL}/payment/success`,
    cancel_url: `${URL}/payment/cancel`,
  });

  res.status(200).json({ id: session.id });
};

export default handler;
