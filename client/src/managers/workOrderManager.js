const _apiUrl = "/api/workorder";

export const getIncompleteWorkOrders = () => {
    return fetch(_apiUrl + "/incomplete").then((res) => res.json());
};

export const createWorkOrder = (workOrder) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(workOrder),
    }).then((res) => res.json);
};

export const updateWorkOrder = (workOrder) => {
    return fetch(`${_apiUrl}/${workOrder.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(workOrder),
    });
};

export const completeWorkOrderById = (id) => {
    return fetch(`${_apiUrl}/complete/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }
    });
};

export const deleteWorkOrderById = (id) => {
    return fetch(`${_apiUrl}/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
};