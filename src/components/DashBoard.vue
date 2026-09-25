<script setup lang="js">

</script>

<template>
    <v-container>
        <v-row class="ga-3">
            <v-col class="w-50">
                <v-card to="/inspections/open"><template v-slot:text>
                        <v-icon size="128">mdi-bookmark-outline</v-icon><br>
                        Scheduled
                    </template></v-card>
            </v-col>
            <v-col class="w-50">
                <v-card to="/inspections/done"><template v-slot:text>
                        <v-icon size="128">mdi-check-circle</v-icon><br>
                        Complete
                    </template></v-card>
            </v-col>
            <v-col class="w-50">
                <v-card to="/knowledge"><template v-slot:text>
                        <v-icon size="128">mdi-apps</v-icon><br>
                        Knowledge base
                    </template></v-card>
            </v-col>
            <v-col class="w-50">
                <v-card to="/settings"><template v-slot:text>
                        <v-icon size="128">mdi-cog</v-icon><br>
                        Settings
                    </template></v-card>
            </v-col>
        </v-row>
    </v-container>
</template>