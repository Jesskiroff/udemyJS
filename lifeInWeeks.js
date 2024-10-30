function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var day = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + day + " days, " + weeks + " weeks, and " + months + " months left.")
}
lifeInWeeks(72)