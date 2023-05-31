// sortByProp using JS arrays api - assuming the prop to sort is "edad"
export const sortByProp = (objs = []) => [...objs].sort((a, b) => a.edad > b.edad ? 1 : -1);

// sortByProp using iterative approach
export const sortByPropIterative = (objs = []) => {
    let aux;
    const auxObjs = [...objs];
    for (let i = 1; i <= auxObjs.length; ++i) {
        const prev = auxObjs[i - 1];
        if (auxObjs[i]?.edad < prev?.edad) {
            aux = auxObjs[i];
            auxObjs[i] = auxObjs[i - 1];
            auxObjs[i - 1] = aux;
        }
    }
    return auxObjs;
}