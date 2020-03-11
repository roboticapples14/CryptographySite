function pigLatin() {
    var str = document.getElementById("input").value;
    var words = []
    var word = ""
    var result = []
    var returnWords = document.getElementById("result")
    words = str.split(" ");

    for(var i = 0; i < words.length; i++) {
        word = words[i];
        if(word.length > 1) {
            word = word.substring(1) + word[0].toLowerCase() + "ay"
        }
        result[i] = word
    }
    returnWords.innerHTML = result.join(" ");
}

function encodeAscii() {
    var output = document.getElementById("result");
    var input = document.getElementById("input").value;
    var outputStr = "";
    for (var i = 0; i < input.length; i++) {
        outputStr += input.charAt(i).charCodeAt(0) + " "
    }
    output.innerHTML = outputStr;
}

function decodeAscii() {
    var output = document.getElementById("result");
    var input = document.getElementById("input").value;
    var arr = input.split(" ");
    var outputStr = "";
    for(var i = 0; i < arr.length; i++) {
        outputStr += String.fromCharCode(arr[i])
    }
    output.innerHTML = outputStr;
}

function binary() {
    var output = document.getElementById("result");
    var input = document.getElementById("input").value;
    var outputStr = "";
    for (var i = 0; i < input.length; i++) {
        outputStr += input[i].charCodeAt(0).toString(2) + " ";
    }
    output.innerHTML = outputStr;
  }

  function encodeBase64() {
    var output = document.getElementById("result");
    var input = document.getElementById("input").value;
    var result = btoa(input);
    output.innerHTML = result;
  }

  function decodeBase64() {
    var output = document.getElementById("result");
    var input = document.getElementById("input").value;
    var result = atob(input);
    output.innerHTML = result;
  }

  function hexToText() {
    var hex = document.getElementById("input").value;
    var output = document.getElementById("result");
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    output.innerHTML = str;
}

function textToHex() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("result");
    var hex = '';
    for(var i=0;i<input.length;i++) {
        hex += '' + input.charCodeAt(i).toString(16);
    }
    output.innerHTML = hex;
}

function ceaser() {
    var str = document.getElementById("input").value;
    var result = ""
    var shift = document.getElementById("mySelect").value;
    var returnWords = document.getElementById("result")
    var dict = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10,
        "eleven": 11,
        "twelve": 12,
        "thirteen": 13,
        "fourteen": 14,
        "fiveteen": 15,
        "sixteen": 16,
        "seventeen": 17,
        "eighteen": 18,
        "nineteen": 19,
        "twenty": 20,
        "twenty-one": 21,
        "twenty-two": 22,
        "twenty-three": 23,
        "twenty-four": 24,
        "twenty-five": 25,
    };
    var shiftBy = parseInt(dict[shift])

    for (var i = 0; i < str.length; i++) {
        var ogAscii = parseInt(str.charAt(i).charCodeAt(0))
        //if ogAscii is alphabetical
        if((ogAscii >= 65 && ogAscii <= 90) || (ogAscii >= 97 && ogAscii <= 122)) {
            //if it overlaps
            if (ogAscii + shiftBy <= 64 || (ogAscii + shiftBy >= 91 && ogAscii + shiftBy <= 96) || ogAscii + shiftBy >= 123) {
                ogAscii -= 26;
            }
            result += String.fromCharCode(ogAscii + shiftBy);
        } 
        else {
            result += str[i];
        }
    }
    returnWords.innerHTML = result;
}

function rot13() {
    var input = document.getElementById("input").value;
    var result = ""
    var shift = 13;
    var output = document.getElementById("result")
    for (var i = 0; i < input.length; i++) {
        var ogAscii = parseInt(input.charAt(i).charCodeAt(0))
        //if ogAscii is alphabetical
        if((ogAscii >= 65 && ogAscii <= 90) || (ogAscii >= 97 && ogAscii <= 122)) {
            //if it overlaps
            if (ogAscii + shift <= 64 || (ogAscii + shift >= 91 && ogAscii + shift <= 96) || ogAscii + shift >= 123) {
                ogAscii -= 26;
            }
            result += String.fromCharCode(ogAscii + shift);
        } 
        else {
            result += input[i];
        }
        if(result.length % 50 == 0) {
            result += "\n";
        }
    }
    output.innerHTML = result;
}