const styles = {
    toggleElement: (x1, x2)  => ((x2 === undefined) ?
    { display: x1 ? 'flex' : 'none'} : 
    { display: x1 && x2 ? 'flex' : 'none' })
};

export default styles;