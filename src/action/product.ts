import conn from "@/lib/dbConnections";

const getData = async () => {
  try {
    const query = "select * from category;";
    const result = await conn.query(query);
    console.log("ttt", result);
  } catch (error) {
    console.log(error);
  }
};

export { getData };
