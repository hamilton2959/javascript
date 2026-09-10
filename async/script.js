
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if (dogWalked) {
                resolve("You walked the dog🦮");
            } else {
                reject("You didnt walked the dog🐕‍🦺");
            }
        }, 1500);
    });
}