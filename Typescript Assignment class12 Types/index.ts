interface Address {
    street: string,
    city: string,
    postalCode: string,
}
interface Marks {
    math: {
        midterm: number,
        final: number
    },
    science: {
        midterm: number,
        final: number
    }
}
interface TypeOfObject {
    name: string,
    age: number,
    isStudent: boolean,
    interests: string[],
    address: Address,
    grades: Marks,
    contact: {
        email: string,
        phone: string,
    },
    tuple: [number, string, boolean],
    functionExample: (x: number) => number
}

const complexObject: TypeOfObject = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    interests: ["programming", "music", "hiking"],
    address: {
        street: "123 Main St",
        city: "Exampleville",
        postalCode: "12345",
    },
    grades: {
        math: {
            midterm: 85,
            final: 92
        },
        science: {
            midterm: 78,
            final: 88
        },
    },
    contact: {
        email: "john.doe@example.com",
        phone: "+1234567890",
    },
    tuple: [1, "two", true],
    functionExample: function (x) {
        return x * 2;
    },
};
console.log("Printing the complete object after defining types:", "\n", complexObject);
