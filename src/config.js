// Configuration for AgentCore Runtime and MCP Gateway

const config = {
  agentCoreRuntime: {
    host: 'localhost',
    port: 3000,
    timeout: 5000,
  },
  mcpGateway: {
    endpoint: 'https://mcp.gateway.url',
    apiKey: 'YOUR_API_KEY',
  },
};

module.exports = config;