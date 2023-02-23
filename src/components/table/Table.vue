<template>
    <DataTable
        :value="cars"
        :scrollable="true"
        scrollHeight="480px"
        responsiveLayout="scroll"
        breakpoint="360px"
    >
        <Column field="name" header="Name"></Column>
        <Column field="phone" header="Phone"></Column>
        <Column field="plate" header="Plate"></Column>
        <Column field="color" header="Color"></Column>
        <Column header="Ações">
            <template #body="userCar">
                <Button icon=" pi pi-id-card" @click="details(userCar.data)" />
            </template>
        </Column>
    </DataTable>

    <Dialog header="Detalhes" modal="true" v-model:visible="modalDetails">
        <ul>
            <li><strong>Nome:</strong> {{ name }}</li>
            <li><strong>Telefone:</strong> {{ phone }}</li>
            <li><strong>Placa:</strong> {{ plate }}</li>
            <li><strong>Cpf:</strong> {{ cpf }}</li>
            <li><strong>Cor:</strong> {{ color }}</li>
            <li><strong>Data:</strong> {{ registerCar }}</li>
            <li>
                <Tag severity="success">R$ {{ payment }}</Tag>
            </li>
        </ul>
    </Dialog>
</template>

<script>
export default {
    name: 'Table',
    props: {
        cars: [],
    },
    data() {
        return {
            modalDetails: false,
            name: '',
            color: '',
            payment: '',
            phone: '',
            cpf: '',
            plate: '',
            registerCar: '',
        };
    },
    methods: {
        async details(userCar) {
            this.modalDetails = true;

            let req = await fetch(
                `http://localhost:3500/api/user/${userCar.id}`
            );

            let data = await req.json();

            this.name = data.name;
            this.phone = data.phone;
            this.plate = data.plate;
            this.color = data.color;
            this.cpf = data.cpf;
            this.payment = data.payment;
            this.registerCar = data.registerCar;
        },
    },
};
</script>

<style scoped>
ul {
    list-style: none;
}

ul li {
    margin: 10px 0px 0px 0px;
}
</style>
