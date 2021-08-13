import React, { Component, FormEvent, ReactNode, RefObject } from "react";
import Button from "./Button";

interface Props {}

interface State {
    formStatus: FormStatus,
    errorMessageIsVisible: boolean,
    formDimensions: {
        width: number,
        height: number
    }
}

type FormStatus = "idle"|"pending"|"error"|"success";

export default class ContactSection extends Component<Props, State> {
    private readonly formRef: RefObject<HTMLFormElement>;

    constructor(props) {
        super(props);

        this.state = {
            formStatus: "idle",
            errorMessageIsVisible: false,
            formDimensions: {
                width: 0,
                height: 0
            }
        };

        this.formRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener("load", this.determinePersistSaveFormDimensions.bind(this))
        window.addEventListener("resize", this.determinePersistSaveFormDimensions.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener("load", this.determinePersistSaveFormDimensions.bind(this))
        window.removeEventListener("resize", this.determinePersistSaveFormDimensions.bind(this))
    }

    render(): ReactNode {

        let child = this.renderChild();

        if (this.state.formStatus === "pending") child = this.renderSpinner();

        return <section className="container ">
            <div className="text-blue-500 text-ntr text-2xl">Du hast n' cooles Projekt am Start?</div>
            <div className="text-white text-5xl font-semibold my-5">Lass doch mal ratschen!</div>
            <div className="p-16 flex flex-col space-y-10 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900">
                <ul className="text-white lg:flex lg:gap-10">
                    <li className="flex gap-5 lg:gap-2 items-center"><span className="flex-0 material-icons-outlined text-2xl text-blue-500">phone</span><span className="flex-1">0123 4567890</span></li>
                    <li className="flex gap-5 lg:gap-2 items-center"><span className="flex-0 material-icons-outlined text-2xl text-blue-500">print</span><span className="flex-1">0123 4567890</span></li>
                    <li className="flex gap-5 lg:gap-2 items-center"><span className="flex-0 material-icons-outlined text-2xl text-blue-500">email</span><span className="flex-1">info@aweng.media</span></li>
                </ul>
                <hr />
                <div className="text-white text-5xl font-semibold my-5text-white text-5xl font-semibold my-5">Kontaktformular</div>
                { child }
            </div>
        </section>;
    }

    private renderChild(): ReactNode {
        switch (this.state.formStatus) {
            case "pending":
                return this.renderSpinner();
            case "success":
                return this.renderSuccessMessage();
            case "error":
                return this.renderErrorMessage();
            default: // idle
                return this.renderForm();
        }
    }

    private renderForm(): ReactNode {
        return <form onSubmit={ this.formOnSubmit.bind(this) } ref={ this.formRef }  className="grid grid-flow-row gap-5">
            <div className="grid grid-flow-row 2xl:grid-cols-2 2xl:grid-flow-col text-white gap-5">
                <div className="grid grid-flow-row 2xl:grid-flow-row gap-5 lg:grid-flow-col">
                    <div className="hidden">
                        <div className="mb-3">
                            <label htmlFor="contact-form-name">Name</label>
                        </div>
                        <input id="contact-form-name" name="name" type="text" maxLength="50" spellCheck="false" autoComplete="off" className="bg-gray-800 w-full text-xl px-4 py-2 focus:border-blue-500 border-2 border-transparent" />
                    </div>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="contact-form-email">E-Mail</label>
                        </div>
                        <input id="contact-form-email" name="email" type="email" maxLength="50" spellCheck="false" autoComplete="off" className="bg-gray-800 w-full text-xl px-4 py-2 focus:border-blue-500 border-2 border-transparent" required="required" />
                    </div>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="contact-form-subject">Betreff</label>
                        </div>
                        <input id="contact-form-subject" name="subject" type="text" maxLength="50" spellCheck="false" autoComplete="off" className="bg-gray-800 w-full text-xl px-4 py-2 focus:border-blue-500 border-2 border-transparent" required="required" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-3 flex-none">
                        <label htmlFor="contact-form-message">Nachricht</label>
                    </div>
                    <textarea id="contact-form-message" name="message"  maxLength="1000" spellCheck="false" autoComplete="off" className="block bg-gray-800 w-full text-xl px-4 py-2 focus:border-blue-500 border-2 border-transparent h-36 2xl:h-auto flex-1" required="required" />
                </div>
            </div>
            <div className="grid grid-flow-row 2xl:grid-cols-2 lg:grid-flow-col text-white 2xl:gap-5">
                <div className="grid grid-flow-row 2xl:flex lg:grid-flow-col lg:grid-cols-2 gap-5 2xl:col-start-2 2xl:col-span-1">
                    <div className="flex gap-2">
                        <div>
                            <input id="contact-form-privacy-consent" type="checkbox" required="required" />
                        </div>
                        <div>
                            <label htmlFor="contact-form-privacy-consent"> Ich habe die Hinweise zum Datenschutz gelesen und akzeptiere diese.</label>
                        </div>
                    </div>
                    <div>
                        <Button type="submit">
                            Absenden
                        </Button>
                    </div>
                </div>
            </div>
        </form>;
    }

    private renderSpinner(): ReactNode {
        return <div style={{ ...this.state.formDimensions }} className="flex justify-center items-center" >
            <div className="spinner animate-spin rounded-full h-28 w-28 border-2 border-solid" />
        </div>;
    }

    private renderSuccessMessage(): ReactNode {
        return <div style={{ ...this.state.formDimensions }} className="flex justify-center items-center flex-col space-y-8">
            <div className="text-white text-ntr text-2xl">
                <span className="text-blue-500">Ey geilo!</span>&nbsp;
                Danke für Deine Nachricht! Du wirst in Kürze von mir hören! :)
            </div>
            <Button onClick={ this.showFormular.bind(this) }>
                Formular wieder einblenden
            </Button>
        </div>;
    }

    private renderErrorMessage(): ReactNode {
        return <div style={{ ...this.state.formDimensions }} className="flex justify-center items-center flex-col space-y-8">
            <div className="text-white text-ntr text-2xl">
                <span className="text-blue-500">Och nö!</span>&nbsp;
                Irgendwas hat da nicht so richtig funktioniert... <br />
                Entweder versuchst Du es direkt nochmal, oder Du schreibst einfach ne' Mail an <a href="mailto:info@aweng.media" className="hover:text-blue-500 underline">info@aweng.media</a>.
            </div>
            <Button onClick={ this.showFormular.bind(this) }>
                Formular wieder einblenden
            </Button>
        </div>;
    }

    private determinePersistSaveFormDimensions(): void {
        const node = this.formRef.current;
        if (node !== null) {
            this.setState(state => {
                return { ...state, formDimensions: { height: node.offsetHeight, width: node.offsetWidth } };
            });
        }
    }

    private formOnSubmit(event: FormEvent): void {
        event.preventDefault();

        this.setState(state => {
            return { ...state, formStatus: "pending" };
        });

        const formData = new FormData(event.target as HTMLFormElement);
        fetch("/contact", { method: "POST", body: formData })
            .then(() => {
                setTimeout(() => {
                    this.setState(state => {
                        return { ...state, formStatus: "success" };
                    });
                }, 1500);
            })
            .catch(() => {
                setTimeout(() => {
                    this.setState(state => {
                        return { ...state, formStatus: "error" };
                    });
                }, 1500);
            });
    }

    private showFormular(): void {
        this.setState(state => {
            return { ...state, formStatus: "idle" };
        });
    }
}