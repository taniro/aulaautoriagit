import Buttons from "../buttons/Buttons";
import Header from "../header/Header";
import Meucard from "../meucard/Meucard";

const App = () => {
        return (
            <>
                <Header />
                <Header />
                <Buttons />
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col">
                            <Meucard />
                        </div>
                        <div class="col">
                            <Meucard />
                        </div>
                        <div class="col">
                            <Meucard />
                        </div>
                    </div>
            </div>
            </>
        )
}

export default App;