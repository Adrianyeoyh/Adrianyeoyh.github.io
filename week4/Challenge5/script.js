function generate_board() {

    //============================================================================
    // Task 1
    // Retrieve the friend name(s) from the 'friends' multi-select dropdown menu
    //============================================================================

    // Array to contain the names of user-selected friend(s)
    // For example, if the user selected 'Darryl' and 'Yin Kit',
    //   this array's value will be:
    //      [ 'darryl', 'yinkit' ]
    //
    let friends = []; // Initialize to empty


    // YOUR CODE GOES HERE
    let select = document.getElementById("friends");
    for (let i = 0; i< select.options.length; i++) {
        if (select.options[i].selected) {
            friends.push(select.options[i].value);
        }
    }


    // Display user's selection in Developer Tools --> Console.
    console.log(friends);



    //============================================================================
    // Task 2
    // Given one or more selected friends and given 4 fruit names,
    //   generate a 'randomized' Array of finalized card names.
    // 
    // Card names are as follows:
    //    apple_brandon.png
    //    banana_brandon.png
    //    kiwi_brandon.png
    //    orange_brandon.png
    //
    // where 'brandon' can be replaced with another friend's name,
    // e.g.
    //    apple_nick.png
    // (and so on)
    //
    // Display all 4 fruit cards of one or more selected friends.
    //
    // NOTE: Each card must be displayed TWO and ONLY TWO times (thus, a "pair")
    //       (such that the user can attempt to 'match').
    //
    // Check out this utility function (declared at the bottom of this file)
    //   for randomizing the order of Array elements.
    //        shuffleArray()
    //============================================================================
    const fruits = [ 'apple', 'banana', 'kiwi', 'orange' ];

    // YOUR CODE GOES HERE

    // Given one or more selected friends and given 4 fruit names,
    //   generate a 'randomized' Array of finalized card names.

    let cards = [];

    for (const friend of friends) {
        for (const fruit of fruits) {
            const cardName = fruit+"_"+friend
            // console.log(cardName);
            cards.push(cardName);
            cards.push(cardName)
        }
    }

    // console.log(cards);
    shuffleArray(cards);
    // console.log(cards)




    //============================================================================
    // Task 3
    // Display the cards in <div id="game-board">
    //
    // For this, we will make use of Template Literal (using backticks).
    //
    // NOTE: The game board will always have 4 columns and N rows, where N denotes
    //       (number of selected friends) x 2.
    //
    //       For example, if I chose 'Brandon', 'Darryl', and 'Nick' (3 friends),
    //         then the newly generated game board will be
    //         6 (rows) by 4 (columns).
    //============================================================================
    const num_cols = fruits.length;
    const num_rows = friends.length * 2;

    console.log("# of columns: " + num_cols)
    console.log("# of rows: " + num_rows);

    let score = 0;
    document.getElementById('score_string').innerHTML = `Total Score: <span id="score">${score}</span>`


    // YOUR CODE GOES HERE
    let table_str = "";
    let ctr = 0;
    for (let row = 0; row<num_rows; row++) {
        let row_str = "<tr class='row'>";
        for (let col = ctr;col<ctr+4;col++) {
            let col_str = `<td class='col'>
                                    <img onclick=open_card(this) id="${cards[col]}" class="closed" src="./cards/hidden.png"/>
                            </td>`;
            row_str += col_str;
        }
        ctr+=4
        row_str += "</tr>";
        // console.log(row_str)
        table_str += row_str
    }



    

    // You will need to rewrite the value of this result_str (String).
    let result_str = `
        <div>
            <table>
                ${table_str}
            </table>
            
        </div>
    `;


    // DO NOT MODIFY THE FOLLOWING
    // Replace the innerHTML of <div id="game-board">
    //   with a newly prepared HTML string (result_str).
    document.getElementById('game-board').innerHTML = result_str;
}


// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function open_card(img) {
    let img_src = img.src;
    img.src = `./cards/${img.id}.png`;
    img.className = "open";
    match_card();
}

function close_card(img) {
    img.src = `./cards/hidden.png`;
    img.className = "closed";
}

function match_card() {
    let open = document.getElementsByClassName("open");
    if (open.length == 2) {
        if (open[0].id == open[1].id) {
            add_score();
            open[0].className = 'matched';
            open[0].className = 'matched';
        }
        else {
            console.log(open[0], open[1])
            setTimeout(function() {
                close_card(open[0]);
                close_card(open[0]);
            }, 2000);
        }
    }
    else if (open.length > 2) {
        while (open.length>0) {
            close_card(open[0])
        }
    }


}

function add_score() {
    let score = parseInt(document.getElementById("score").innerText);
    console.log(score)
    score += 1;
    console.log(score)
    document.getElementById("score").innerText = score;
}

