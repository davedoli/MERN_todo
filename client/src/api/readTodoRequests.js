const get_all_todos = function() {
    return fetch("/todos", {method : "GET"})
    .then(response => response.json())
}

export default get_all_todos