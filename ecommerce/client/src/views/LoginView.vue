<template>
    <div class="min-h-screen flex items-center justify-center border-t border-gray-100">
      <div class="border mt-2 p-6 rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <div class="bg-red-500 mb-2 text-white p-2 rounded">Error Message</div>
        <h2 class="text-2xl font-semibold mb-6">Login</h2>
        <div>
          <form>
            <div class="mb-4">
              <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
              <input type="email" id="username" class="mt-1 p-2 border w-full rounded-md" />
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" class="mt-1 p-2 border w-full rounded-md" />
            </div>
            <div class="mb-6">
              <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
