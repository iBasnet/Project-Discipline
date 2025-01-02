
export default function Hero() {
    return (
        <section className="hero">
            <form>
                <div className="hero__title">
                    <h2>Welcome!</h2>
                    <p>let's get to the thick of it</p>
                </div>
                <div className="hero__input">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit">Let's go →</button>
            </form>
        </section>
    )
}
