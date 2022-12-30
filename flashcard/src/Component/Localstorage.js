export const getMyflashCards = () => {
    if (!localStorage["MyFlashCard"]) {
      localStorage["MyFlashCard"] = "[]";
    }
  
    let MyFlashCard = localStorage["MyFlashCard"];
    MyFlashCard = JSON.parse(MyFlashCard);
    return MyFlashCard;
  };
  
  // function for selecting the card with particular card id
  export const getMyflashCardById = (id) => {
    const MyFCard = getMyflashCards();
    const myCard = MyFCard.find((myCard) => myCard.id === id);
    return myCard;
  };
  
  //function for deleting card with unique card id
  export const deleteFlashCardById = (index) => {
    let MyFCard = getMyflashCards();
    MyFCard.splice(index, 1);
    localStorage.setItem("MyFlashCard", JSON.stringify(MyFCard));
    //after deleting, page will refresh automatically
    window.location.reload();
  };