import { connectToDatabase } from "../../lib/mongodb";

export default function Rents({ rents } : any) {

  return (

    <div>
      <h1>Rents</h1>
      <p>
        <small>(Preference wise)</small>
      </p>
      <ul>
        {rents.map((rent: any) => (
          <li key={rent.id}>
            <h2>{rent.title}</h2>
          </li>
        ))}
      </ul>
    </div>

  );

}

export async function getServerSideProps() {

  const { db } = await connectToDatabase();

  const rents = await db
    .collection("rents")
    .find({})
    .sort({ id: -1 })
    .limit(20)
    .toArray();

  return {
    props: {
      rents: JSON.parse(JSON.stringify(rents)),
    },

  };

}