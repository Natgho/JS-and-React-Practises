import {useState} from "react";

function UserWithArray() {
    const [user, setUser] = useState(
        [
            {
                name: 'Sezer',
                friends: ["Elif Tugce"]
            }
        ]
    )
    const [address, setAddress] = useState({title: "Istanbul", pk: 34000})
    return (
        <div>
            {
                user.map((row, index) => ([
                    <div key={row.name}>
                        <p key={row.name}><b>User:</b> {row.name}</p>
                        <p key={row.index}><b>Friends:</b> {row.friends}</p>
                    </div>
                ]))
            }
            <button onClick={() => {
                // Testing for how to multiline
                console.log("Hello world")
                setUser([...user, {name: 'Mehmet', friends: ["Elif Tugce"]}])
            }
            }>Add User
            </button>
            <hr/>
            <div>
                <h2>Address:</h2><br/>
                {`${address.title} - ${address.pk}`}
                <br/><br/><button onClick={()=> (setAddress({...address, pk:44444}))}>Update Address</button>
                <br/><br/><button onClick={()=> (setAddress({...address, title:"Bursa"}))}>Update Address</button>
            </div>
        </div>
    )
}

export default UserWithArray;