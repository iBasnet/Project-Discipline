import { useContext, useState } from "react";
import { BiReset } from "react-icons/bi";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { FormContext } from "../context/FormContext";
import Alerts from "./Alerts";

type Tier = 'S' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
type willTry = boolean | null;

export default function Hero() {

    // const url = "http://localhost:5172";
    const url = "https://project-disicipline-server.onrender.com";

    const [showAlert, setShowAlert] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const { state, dispatch } = useContext(FormContext);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        const form = e.currentTarget.closest('form');
        if (form && !form.reportValidity()) {
            return;
        }

        try {
            const response = await fetch(`${url}/api/videos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            });

            if (!response.ok) {
                console.error('Failed to submit form');
                return;
            }

            dispatch({ type: 'RESET_STATE' });

            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        }
        catch (error) {
            console.error('Error caught submitting form', error);
        }
    }

    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        try {

            if (!state.link) {
                throw new Error('Link is required');
            }

            const response = await fetch(`${url}/api/videos/${state.link}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state)
            })

            // Handle response
            if (!response.ok) {
                console.error('Failed to update data', response.statusText);
                return;
            }

            const allVideos = await response.json();

            console.log('All videos:', allVideos);

        } catch (error) {
            console.error('Failed to submit!', error);
        }
    }

    const parseOptions = (option: string) => (option === 'null' ? null : option === 'true' ? true : false)

    const stringifyOptions = (option: boolean | null) => (option === null ? 'null' : option ? 'true' : 'false')

    return (
        <section className="hero">
            <form>
                <div className="form__title">
                    <h2>Welcome!</h2>
                    {
                        editMode
                            ? <p>🚨 Use video link for referencing 🚨</p>
                            : <p>let's get to the thick of it</p>
                    }
                </div>
                <div className="form__input">
                    <div className="form__group-1">
                        <input type="link" placeholder="Video Link"
                            value={state.link}
                            onChange={(e) => dispatch({ type: 'SET_LINK', payload: e.target.value as string })}
                            required
                        />
                        <select defaultValue={'B'}
                            value={state.tier}
                            onChange={(e) => dispatch({ type: 'SET_TIER', payload: e.target.value as Tier })}
                            required
                        >
                            <option value="S">S</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <input type="text" placeholder="Remarks"
                        value={state.remarks}
                        onChange={(e) => dispatch({ type: 'SET_REMARKS', payload: e.target.value as string })}
                        required
                    />
                    <div className="form__group-2">
                        <input type="text" placeholder='Will you try this?' readOnly />
                        <select value={stringifyOptions(state.willTry)}
                            onChange={(e) => dispatch({ type: 'SET_WILL-TRY', payload: parseOptions(e.target.value) as willTry })}
                            required
                        >
                            <option value='true'>Yes</option>
                            <option value='false'>No</option>
                            <option value='null'>Maybe</option>
                        </select>
                    </div>
                </div>
                <button type="submit" onClick={editMode ? handleEdit : handleSubmit}>{editMode ? 'Update' : 'Submit'}</button>
                <div className="form__control">
                    <BiReset title="Reset form" onClick={() => dispatch({ type: 'RESET_STATE' })} />
                    <RiUploadCloud2Fill title="Update data"
                        onClick={() => setEditMode(!editMode)}
                    />
                </div>
            </form>
            {showAlert && <Alerts setShowAlert={setShowAlert} />}
        </section >
    )
}