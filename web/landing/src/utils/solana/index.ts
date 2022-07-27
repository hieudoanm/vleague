import { Program, AnchorProvider, web3 } from '@project-serum/anchor';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import idl from '../../configs/solana/idl';
import keyPair from '../../configs/solana/key-pair.json';

let baseAccount = null;
let provider = null;

const { SystemProgram, Keypair } = web3;

const getProvider = () => {
  if (provider !== null) {
    return provider;
  }

  const network = clusterApiUrl('devnet');
  const preflightCommitment = 'processed';

  const connection = new Connection(network, preflightCommitment);
  provider = new AnchorProvider(connection, window['solana'], {
    preflightCommitment,
  });
  return provider;
};

const getBaseAccount = () => {
  // const baseAccount = Keypair.generate();
  // console.log('getBaseAccount baseAccount', baseAccount);
  if (baseAccount !== null) {
    return baseAccount;
  }
  const keyValues = Object.values(keyPair._keypair.secretKey);
  const secret = new Uint8Array(keyValues);
  baseAccount = Keypair.fromSecretKey(secret);
  return baseAccount;
};

export const getSpriteAccount = async (): Promise<any> => {
  try {
    const baseAccount = getBaseAccount();
    const provider = getProvider();

    const programID = new PublicKey(idl.metadata.address);
    const program = new Program(idl, programID, provider);

    // console.log('getSpriteAccount baseAccount', baseAccount);
    // console.log(
    //   'getSpriteAccount baseAccount.publicKey',
    //   baseAccount.publicKey
    // );
    // await program.rpc.startStuffOff({
    //   accounts: {
    //     baseAccount: baseAccount.publicKey,
    //     user: provider.wallet.publicKey,
    //     systemProgram: SystemProgram.programId,
    //   },
    //   signers: [baseAccount],
    // });

    const account = await program.account.baseAccount.fetch(
      baseAccount.publicKey
    );
    console.log('getSpriteAccount account:', account);

    return account;
  } catch (error) {
    console.log('getSpriteAccount error:', error);
    return {};
  }
};

export const getSprites = async (): Promise<any[]> => {
  try {
    const account = await getSpriteAccount();
    return account.spriteList || ([] as any[]);
  } catch (error) {
    console.log('Error in getSprites: ', error);
    return [];
  }
};

export const addSprite = async (spriteLink): Promise<any> => {
  const baseAccount = getBaseAccount();
  const provider = getProvider();

  const programID = new PublicKey(idl.metadata.address);
  const program = new Program(idl, programID, provider);

  await program.rpc.addSprite(spriteLink, {
    accounts: {
      baseAccount: baseAccount.publicKey,
      user: provider.wallet.publicKey,
    },
  });
};
