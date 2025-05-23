import React, { useState } from 'react'
import {
  Typography,
  Container,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Button,
} from '@mui/material'

const App = () => {
  const [emailContent, setEmailContent] = useState('')
  const [tone, setTone] = useState('')
  const [generateReply, setGeneratedReply] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {}

  return (
    <div>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Email Reply Generator
        </Typography>
        <Box sx={{ mx: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Original Email Content"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone}
              label="Tone (Optional)"
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
              <MenuItem value="concise">Concise</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Generated Reply'}
          </Button>
        </Box>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        {generateReply && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Genreated reply:
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generateReply || ''}
              inputProps={{ readOnly: true }}
            />
            <Button>Copy to Clipboard</Button>
          </Box>
        )}
      </Container>
    </div>
  )
}

export default App
