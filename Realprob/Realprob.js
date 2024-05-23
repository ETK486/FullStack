var nopeople;
var leftsignal;
var rightsignal;
var topsignal;
var bottomsignal;
var time = 1.0;
var emergency = false;
nopeople = 10;
leftsignal = 5;
rightsignal = 10;
topsignal = 6;
bottomsignal = 11;
do {
    if (emergency) {
        console.log("The control is converted to manual for emergency situation...");
    }
    else {
        if ((nopeople > leftsignal && nopeople > rightsignal && nopeople > topsignal && nopeople > bottomsignal) || (nopeople == leftsignal || nopeople == rightsignal || nopeople == topsignal || nopeople == bottomsignal)) {
            console.log("People can Cross the road");
            nopeople -= 5;
            leftsignal += 2;
            rightsignal += 2;
            topsignal += 2;
            bottomsignal += 2;
        }
        else if ((leftsignal > nopeople && leftsignal > rightsignal && leftsignal > topsignal && leftsignal > bottomsignal) || (leftsignal == rightsignal || leftsignal == topsignal || leftsignal == bottomsignal)) {
            console.log("Left signal is open now");
            nopeople += 2;
            leftsignal -= 5;
            rightsignal += 2;
            topsignal += 2;
            bottomsignal += 2;
        }
        else if ((rightsignal > nopeople && rightsignal > leftsignal && rightsignal > topsignal && rightsignal > bottomsignal) || (rightsignal == topsignal || rightsignal == bottomsignal)) {
            console.log("Right signal is open now");
            nopeople += 2;
            leftsignal += 2;
            rightsignal -= 5;
            topsignal += 2;
            bottomsignal += 2;
        }
        else if ((topsignal > nopeople && topsignal > leftsignal && topsignal > rightsignal && topsignal > bottomsignal) || (topsignal == bottomsignal)) {
            console.log("Top Signal is open now");
            nopeople += 2;
            leftsignal += 2;
            rightsignal += 2;
            topsignal -= 5;
            bottomsignal += 2;
        }
        else if (bottomsignal > nopeople && bottomsignal > leftsignal && bottomsignal > rightsignal && bottomsignal > topsignal) {
            console.log("Bottom Signal is open now");
            nopeople += 2;
            leftsignal += 2;
            rightsignal += 2;
            topsignal += 2;
            bottomsignal -= 5;
        }
    }
    time += 0.5;
} while (time <= 22.0);
