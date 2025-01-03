import { BiReset } from "react-icons/bi";
import { RiUploadCloud2Fill } from "react-icons/ri";

export default function Hero() {
    return (
        <section className="hero">
            <form>
                <div className="hero__title">
                    <h2>Welcome!</h2>
                    <p>let's get to the thick of it</p>
                </div>
                <div className="hero__input">
                    <div>
                        <input type="link" placeholder="Video" />
                        <select>
                            <option value="S">S</option>
                            <option value="A">A</option>
                            <option value="B" selected>B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <input type="text" placeholder="Remarks" />
                </div>
                <button type="submit">Submit</button>
                <div className="control-group">
                    <BiReset title="Reset form" />
                    <RiUploadCloud2Fill title="Update data" />
                </div>
            </form>
        </section >
    )
}
