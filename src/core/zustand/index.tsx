import { create } from 'zustand';

interface IStore {
  userData: string | null;
  signedUpUserData: string | null;
  setUserData: (data: string) => void;
  setSignedUpUserData: (data: string) => void;
}

const useStore = create<IStore>(
 
);

export { useStore };
