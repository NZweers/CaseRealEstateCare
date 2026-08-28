<script setup lang="js"></script>

<template>
    <section id="center">
    </section>
    <v-container>
        <v-row class="ga-3">
            <v-col class="w-50">
                <v-card><template v-slot:text>
                    <v-icon size="128">mdi-bookmark-outline</v-icon>
                    Scheduled
                </template></v-card>
            </v-col>
            <v-col class="w-50">
                <v-card><template v-slot:text>
                    <v-icon size="128">mdi-check-circle</v-icon>
                    Complete
                </template></v-card>
            </v-col>
            <v-col class="w-50">
                <v-card><template v-slot:text>
                    <v-icon size="128">mdi-apps</v-icon>
                    Knowledge base
                </template></v-card>
            </v-col>
            <v-col class="w-50">
                <v-card><template v-slot:text>
                    <v-icon size="128">mdi-cog</v-icon>
                    Settings
                </template></v-card>
            </v-col>
        </v-row>
    </v-container>
</template>