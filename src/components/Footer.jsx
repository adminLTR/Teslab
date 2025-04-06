import FooterCard from "./FooterCard"
export default function Footer({}) {
    return <footer className="py-8 bg-gray-200">
        <h4 className="text-sky-900 text-2xl text-center font-bold mb-8">
            Available operations
        </h4>
        <div className="p-4 flex justify-center gap-10 flex-wrap">
            <FooterCard
                imgUrl={'/logic-icon.png'}
                txt={'Logic and boolean operations'}
            />
            <FooterCard
                imgUrl={'/calculus-icon.png'}
                txt={'Calculus and mathematical operations'}
            />
            <FooterCard
                imgUrl={'/graph-icon.png'}
                txt={'Elementary operations with Graphs'}
            />
            <FooterCard
                imgUrl={'/tree-icon.png'}
                txt={'Elementary operations with Trees'}
            />
        </div>
    </footer>
}