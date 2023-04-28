export default function Warnning({message}: {message:string}){
    return(
        <div className="bg-yellow-500 p-4">
            <p className="font-medium text-sm sm:text-base">{message}</p>
        </div>
    );
}