<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 text-center text-success">User List</p>

                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque expedita atque omnis, esse provident facilis aliquam ab quas quos, dolorum mollitia dolorem iste beatae quibusdam sed magnam nostrum! Quam, corporis!
                Qui quis eos tempore rem quibusdam laboriosam quam beatae, repellendus explicabo, ducimus dolorem assumenda recusandae suscipit in porro neque architecto voluptate officia doloribus? Rerum consequuntur, corporis labore maiores iste reiciendis.</p>
 
            </div>
        </div>
        <div class="row">
            <div class="col">
                <table class="table table-hover text-center table-striped">
                    <thead class="bg-light">
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company</th>
                            <th>Website</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{user.id}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.company.name}}</td>
                            <td>{{user.website}}</td>
                            <td>{{user.address.city}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { UserService } from '../store';

export default {
    name: "UserList",
    data: function() {
        return {
            users:[]
        };
    },
    created : async function(){
        try {
            let response = await UserService.getAllUsers();
            this.users = response.data;
            
        } catch(error){
            console.log(error);
        }
    }
};
</script>

<style scoped> 

</style>