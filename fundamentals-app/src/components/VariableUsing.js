const name = "Sezer"
const surname = "Bozkir"

function VariableUsing() {
    return (
        <div>
            <h2>
                {name} {surname}
            </h2>
            <h2>{` My name is ${name}, surname is ${surname}`}</h2>
        </div>
    )
}

export default VariableUsing;