import { Idl } from '@project-serum/anchor';

const idl: Idl = {
  version: '0.1.0',
  name: 'pokemon_solana',
  instructions: [
    {
      name: 'startStuffOff',
      accounts: [
        {
          name: 'baseAccount',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'addSprite',
      accounts: [
        {
          name: 'baseAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'user',
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: 'spriteLink',
          type: 'string',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'BaseAccount',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'totalSprites',
            type: 'u64',
          },
          {
            name: 'spriteList',
            type: {
              vec: {
                defined: 'SpriteStruct',
              },
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'SpriteStruct',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'spriteLink',
            type: 'string',
          },
          {
            name: 'userAddress',
            type: 'publicKey',
          },
        ],
      },
    },
  ],
  metadata: {
    address: 'Hdw6vRXV6HVqaZC1N1P6H4RDUf3URfHab8Bt47Gx6Mss',
  },
};

export default idl;
