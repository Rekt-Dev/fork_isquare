import { MDBRipple } from "mdb-react-ui-kit";
import { goToAuthor } from "./GoToAuthor";
import { goToTitle } from "./GoToTitle";
import App from "../App.css";
import index from "../index.css";


export function Card(props) {
  return (
    <MDBRipple
      className="centered"
      style={{ maxWidth: "20rem" }}
      rippleTag="div"
      rippleColor="light"
    >
      <div className="">
        <a href="OpenCard">
          <img
            width="60%"
            height="30%"
            alt=" Book Title"
            src={
              "https://books.google.com/books/content?id=_ojXNuzgHRcC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70jAbnovYhYAgBS2fMWQ42G2Q99zdUXmAZ5Q6A0EAitz5VlEN7gnWYzrRNEqKwPrWnqUZL_UGsBrrhEXsMJRHA2xOwqVuuGvf_G8DgKewXWot2KReoq8ZUvYrT4RAyXDPNQG_9Z&source=gbs_api"
            }
          />
          <div
            className=""
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
        <ul>
          {}
          \\optional out of scope feature
          <a href="./GoToAuthor">
            <li onClick={goToAuthor}>{props.authorName || "Author Name"}</li>
          </a>
          <a href="./GoToTitle">
           \\optional out of scope feature
            <li onClick={goToTitle}>{props.titleName || "Title Name"}</li>
          </a>
        </ul>
      </div>
    </MDBRipple>
  );
}
