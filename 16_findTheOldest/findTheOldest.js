const findTheOldest = function(people) {
    oldestAge = 0
    for (item in people) {
        if (!people[item].yearOfDeath) {
            latestYear = new Date().getFullYear();
        } else {
            latestYear = people[item].yearOfDeath;
        }
        currentAge = latestYear - people[item].yearOfBirth;
        if (currentAge > oldestAge) {
            oldestAge = currentAge
            oldie = item
        }
    }
    return people[oldie];
};

// Do not edit below this line
module.exports = findTheOldest;
