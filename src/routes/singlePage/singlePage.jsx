import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";
import { redirect, 
  // useLoaderData 
} from "react-router-dom";
// import DOMPurify from "dompurify";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function SinglePage() {
  // const post = useLoaderData();
  // console.log(post);
  // const [saved, setSaved] = useState(post.isSaved);
  // const [saved, setSaved] = useState();
  const [post, setPost] = useState(null);
  const [saved, setSaved] = useState(false); 
  const {currentUser} = useContext(AuthContext);


  //chat gpt
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await apiRequest.get(`/posts/${params.id}`);
        setPost(response.data);
        setSaved(response.data.isSaved);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchPostData();
  }, []);
  //till here!

  const handleSave = async() =>{
    // setSaved((prev) => !prev);
    if(!currentUser){
      redirect("/login");
      return;
    }
    if (!post) {
      console.log("Post data not available yet");
      return;
    }
    try{
      // setSaved((prevSaved) => !prevSaved);
      setSaved((prevSaved) => !prevSaved);
      await apiRequest.post("/users/save", {postId: post.id });

    }catch(err){
      console.log(err);
      setSaved((prev) => !prev);
    }
  }

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button onClick={handleSave} style={{
              backgroundColor: saved ? "#fece51" : "white"
            }}>
              <img src="/save.png" alt="" />
              { saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;


// import "./singlePage.scss";
// import Slider from "../../components/slider/Slider";
// import Map from "../../components/map/Map";
// import { useNavigate, useLoaderData } from "react-router-dom";
// import DOMPurify from "dompurify";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import apiRequest from "../../lib/apiRequest";

// function SinglePage() {
//   const post = useLoaderData();
//   const [saved, setSaved] = useState(post.isSaved);
//   const { currentUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSave = async () => {
//     if (!currentUser) {
//       navigate("/login");
//     }
//     // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
//     setSaved((prev) => !prev);
//     try {
//       await apiRequest.post("/users/save", { postId: post.id });
//     } catch (err) {
//       console.log(err);
//       setSaved((prev) => !prev);
//     }
//   };

//   return (
//     <div className="singlePage">
//       <div className="details">
//         <div className="wrapper">
//           <Slider images={post.images} />
//           <div className="info">
//             <div className="top">
//               <div className="post">
//                 <h1>{post.title}</h1>
//                 <div className="address">
//                   <img src="/pin.png" alt="" />
//                   <span>{post.address}</span>
//                 </div>
//                 <div className="price">$ {post.price}</div>
//               </div>
//               <div className="user">
//                 <img src={post.user.avatar} alt="" />
//                 <span>{post.user.username}</span>
//               </div>
//             </div>
//             <div
//               className="bottom"
//               dangerouslySetInnerHTML={{
//                 __html: DOMPurify.sanitize(post.postDetail.desc),
//               }}
//             ></div>
//           </div>
//         </div>
//       </div>
//       <div className="features">
//         <div className="wrapper">
//           <p className="title">General</p>
//           <div className="listVertical">
//             <div className="feature">
//               <img src="/utility.png" alt="" />
//               <div className="featureText">
//                 <span>Utilities</span>
//                 {post.postDetail.utilities === "owner" ? (
//                   <p>Owner is responsible</p>
//                 ) : (
//                   <p>Tenant is responsible</p>
//                 )}
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/pet.png" alt="" />
//               <div className="featureText">
//                 <span>Pet Policy</span>
//                 {post.postDetail.pet === "allowed" ? (
//                   <p>Pets Allowed</p>
//                 ) : (
//                   <p>Pets not Allowed</p>
//                 )}
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/fee.png" alt="" />
//               <div className="featureText">
//                 <span>Income Policy</span>
//                 <p>{post.postDetail.income}</p>
//               </div>
//             </div>
//           </div>
//           <p className="title">Sizes</p>
//           <div className="sizes">
//             <div className="size">
//               <img src="/size.png" alt="" />
//               <span>{post.postDetail.size} sqft</span>
//             </div>
//             <div className="size">
//               <img src="/bed.png" alt="" />
//               <span>{post.bedroom} beds</span>
//             </div>
//             <div className="size">
//               <img src="/bath.png" alt="" />
//               <span>{post.bathroom} bathroom</span>
//             </div>
//           </div>
//           <p className="title">Nearby Places</p>
//           <div className="listHorizontal">
//             <div className="feature">
//               <img src="/school.png" alt="" />
//               <div className="featureText">
//                 <span>School</span>
//                 <p>
//                   {post.postDetail.school > 999
//                     ? post.postDetail.school / 1000 + "km"
//                     : post.postDetail.school + "m"}{" "}
//                   away
//                 </p>
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/pet.png" alt="" />
//               <div className="featureText">
//                 <span>Bus Stop</span>
//                 <p>{post.postDetail.bus}m away</p>
//               </div>
//             </div>
//             <div className="feature">
//               <img src="/fee.png" alt="" />
//               <div className="featureText">
//                 <span>Restaurant</span>
//                 <p>{post.postDetail.restaurant}m away</p>
//               </div>
//             </div>
//           </div>
//           <p className="title">Location</p>
//           <div className="mapContainer">
//             <Map items={[post]} />
//           </div>
//           <div className="buttons">
//             <button>
//               <img src="/chat.png" alt="" />
//               Send a Message
//             </button>
//             <button
//               onClick={handleSave}
//               style={{
//                 backgroundColor: saved ? "#fece51" : "white",
//               }}
//             >
//               <img src="/save.png" alt="" />
//               {saved ? "Place Saved" : "Save the Place"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SinglePage;
