type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");


// enum + switch

// enum Status {
//   Loading = "loading",
//   Success = "success",
//   Error = "error"
// }

// function logStatus(status: Status): void {
//   switch (status) {
//     case Status.Loading:
//       console.log("Loading...");
//       break;
  
//        case Status.Success:
//       console.log("Success!");
//       break;
    
//       case Status.Error:
//       console.log("Something went wrong");
//       break;
//   }
// }

// logStatus(Status.Loading);