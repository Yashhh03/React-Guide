export default function UserInput({onChange, userInput}) {
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment',event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.annualIncome} onChange={(event) => onChange('annualIncome',event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Experted Return</label>
                    <input type="number" required value={userInput.exprectedReturn} onChange={(event) => onChange('exprectedReturn',event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event) => onChange('duration',event.target.value)}/>
                </p>
            </div>
        </section>
    );
}