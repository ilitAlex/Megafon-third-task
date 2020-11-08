function checkAvailability(schedule, currentTime) {

    let array = schedule;
    let firstDate = array[0].split('-');

    let secondDate = array[1].split('-');
    let firstDateStamp = firstDate[1].split(':')[0] * 60 + firstDate[1].split(':')[1] * 1;
    let secondDateStamp = secondDate[0].split(':')[0] * 60 + secondDate[0].split(':')[1] * 1;
    let currentTimeStamp = currentTime.split(':')[0] * 60 + currentTime.split(':')[1] * 1;
    if (secondDate[1] === currentTime) { return ("available")}
    if (firstDateStamp === secondDateStamp) { return secondDate[1] } else {
        if (currentTimeStamp < firstDateStamp ) { return firstDate[1] }

        if (currentTimeStamp > firstDateStamp && currentTimeStamp < secondDateStamp) {
            return ("available")
        }

    }

}