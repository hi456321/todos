type Animal = {
    name: string;
    age: number;
}

type ReadOnlyAnimal<T> = {
    readonly [P in keyof T]: T[P];
}

type OptionalAnimal<T> = {
    [P in keyof T]?: T[P];
}

type ReadOnly = ReadOnlyAnimal<Animal>
type Optional = OptionalAnimal<Animal>

const temp1: ReadOnly = {
    name: 'asv',
    age: 17
}

const temp2: Optional = {
    age: 17
}
