import { createContext, ReactNode, useReducer } from "react";

type Tier = 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

interface FormState {
    link: string;
    tier: Tier;
    remarks: string;
    willTry: boolean | null;
}

const initialState: FormState = {
    link: '',
    tier: 'B',
    remarks: '',
    willTry: null,
}

type Action =
    | { type: 'SET_LINK'; payload: string }
    | { type: 'SET_TIER'; payload: Tier }
    | { type: 'SET_REMARKS'; payload: string }
    | { type: 'SET_WILL-TRY'; payload: boolean | null }

const formReducer = (state: FormState, action: Action): FormState => {

    switch (action.type) {
        case 'SET_LINK':
            return { ...state, link: action.payload };

        case 'SET_TIER':
            return { ...state, tier: action.payload };

        case 'SET_REMARKS':
            return { ...state, remarks: action.payload };

        case 'SET_WILL-TRY':
            return { ...state, willTry: action.payload };

        default:
            return state;
    }
}

export const FormContext = createContext<{ state: FormState; dispatch: React.Dispatch<Action> }>({
    state: initialState,
    dispatch: () => null
})

export const FormContextProvider = ({ children }: { children: ReactNode }): JSX.Element => {

    const [state, dispatch] = useReducer(formReducer, initialState);

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    )
}