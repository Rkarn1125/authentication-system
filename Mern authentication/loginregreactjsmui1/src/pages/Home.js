import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import "../main.css";
const Home = () => {
  // Getting User Data from Redux Store
  const myData = useSelector((state) => state.user);
  console.log("Home", myData);

  return (
    <>
     <div className="container4">
      <h1>this is home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste sequi praesentium veniam hic pariatur ipsum, quaerat quam sint nulla, explicabo atque dignissimos illo aliquid accusamus voluptatem consequatur laudantium odit itaque exercitationem voluptatum quas! Dolore, nesciunt quas nisi cumque dicta modi non dolorum fuga eos placeat? Doloribus sequi officiis magnam ratione culpa eos provident quod, fugiat amet harum commodi, eius quam aut esse vitae, voluptate numquam? Aliquam et incidunt ratione fugit, harum quam pariatur ex magni reiciendis quae quo doloribus fugiat. Iusto et, quam distinctio in amet facilis accusamus hic sunt quaerat modi, similique iure odio suscipit eius vitae voluptates maxime tempore dicta! Dignissimos veniam, maiores dolores magnam fugiat odit quasi facilis! Enim, quos aspernatur maiores consectetur magni adipisci. Aliquid cum culpa labore aspernatur dolor quia veritatis perspiciatis beatae debitis nesciunt ipsam porro quod nobis deleniti sapiente facere, blanditiis explicabo, a vero distinctio esse sunt, nulla voluptatum. Neque ipsam excepturi vitae optio consequuntur dolores provident odio rerum repellendus, autem debitis repudiandae reiciendis esse recusandae amet sint adipisci facere, a dolorum eos sunt? Maxime magnam quis iste obcaecati ducimus vel, sequi, illum adipisci eum molestias harum rerum! Iure, neque maxime qui dicta voluptatem praesentium accusamus maiores dignissimos esse, ex repudiandae voluptate a nihil repellendus. Dolores veniam quae suscipit rem incidunt, aperiam natus eius dignissimos perferendis corrupti voluptatum labore molestias ipsa repudiandae voluptate vero quod numquam ipsam consectetur, omnis provident illo aut, aspernatur accusantium. Expedita, maiores!</p>
     </div>
    </>
  );
};

export default Home;
