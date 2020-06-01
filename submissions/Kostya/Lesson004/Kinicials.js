let inicials = (name) =>
{
    let Space;
    for (let i=0; i<name.length; i++)
    {
        if (name[i]===' ')
            Space = i;
    }
    return name[0] + '.' + name[Space+1];
}
console.log(inicials('Patrick Feeney'));