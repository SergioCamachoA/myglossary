export const handlerVisitCount = (id) => {
    let fetchedList = JSON.parse(localStorage.getItem("mainList"))
    let filtered = fetchedList.find((each) => each.id === id)
    if (filtered !== undefined) filtered.views += 1
    localStorage.setItem("mainList", JSON.stringify(fetchedList))
}
