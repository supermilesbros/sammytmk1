<template>
    <div class="min-h-screen bg-gradient-to-b from-black via-red-900 to-red-700 text-white">
        <UContainer class="flex-1 flex flex-col">
            <!-- Header -->
            <header class="flex items-center justify-between py-6">
                <div class="flex items-center space-x-4">
                    <UIcon name="i-heroicons-play-circle" class="text-red-600 w-10 h-10" />
                    <span class="text-2xl font-bold tracking-wide">Sammy Terry</span>
                </div>
                <nav class="flex items-center space-x-6">
                    <ULink to="/" class="hover:text-red-500">Home</ULink>
                    <ULink to="/tvshows" class="hover:text-red-500">TV Shows</ULink>
                    <ULink to="/movies" class="hover:text-red-500">Movies</ULink>
                    <ULink to="/my-list" class="hover:text-red-500">My List</ULink>
                </nav>
                <div class="flex items-center space-x-4" style="padding-right: rem;">
                    <UDropdownMenu 
                    :items="items"
                        :ui="{content: 'w-48'}" 
                                        >
                        <UButton icon="i-lucide-menu" color="neutral" variant="outline"  />
                    </UDropdownMenu>
                </div>
            </header>

            <!-- Main Content -->
            <main class="flex-1">
                <slot />
            </main>
        </UContainer>
        <!-- Footer -->
        <footer class="mt-16 py-8 text-center text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Sammy Terry. All rights reserved.
        </footer>
    </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'


const items = ref<DropdownMenuItem[][]>([
  [
    {
      label: 'Sammy Terry',
      avatar: {
        src: 'https://github.com/benjamincanac.png'
      },
      type: 'label'
    }
  ],
  [
    {
      label: 'Profile',
      icon: 'i-lucide-user'
    },
    {
      label: 'Billing',
      icon: 'i-lucide-credit-card'
    },
    {
      label: 'Settings',
      icon: 'i-lucide-cog',
      kbds: [',']
    },
  ],
  [
    {
      label: 'Team',
      icon: 'i-lucide-users'
    },
    {
      label: 'Invite users',
      icon: 'i-lucide-user-plus',
      children: [
        [
          {
            label: 'Email',
            icon: 'i-lucide-mail'
          },
          {
            label: 'Message',
            icon: 'i-lucide-message-square'
          }
        ],
        [
          {
            label: 'More',
            icon: 'i-lucide-circle-plus'
          }
        ]
      ]
    },
    {
      label: 'New team',
      icon: 'i-lucide-plus',
      kbds: ['meta', 'n']
    }
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt/ui',
      target: '_blank'
    },
    {
      label: 'Support',
      icon: 'i-lucide-life-buoy',
      to: '/components/dropdown-menu'
    },
    {
      label: 'API',
      icon: 'i-lucide-cloud',
      disabled: true
    }
  ],
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      kbds: ['shift', 'meta', 'q']
    }
  ]
])

</script>

<style scoped>
.min-h-screen {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
UContainer {
    flex: 1 0 auto;
}
footer {
    flex-shrink: 0;
}
/* Optional: Netflix-like font */
:deep(body) {
    font-family: 'Helvetica Neue', Arial, sans-serif;
}
</style>