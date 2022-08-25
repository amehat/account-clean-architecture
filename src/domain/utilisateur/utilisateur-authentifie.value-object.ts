import ValueObject from 'shared/value-object';

// UtilisateurAuthentifie
interface UtilisateurAuthentifieProps {
    identifiant: string;
}

export default class UtilisateurAuthentifie extends ValueObject<UtilisateurAuthentifieProps> {
    get identiant(): string {
        return this.props.identifiant;
    }

    private constructor(props: UtilisateurAuthentifieProps) {
        super(props);
    }

    public static create(props: UtilisateurAuthentifieProps): UtilisateurAuthentifie {
        return new UtilisateurAuthentifie(props);
    }
}
